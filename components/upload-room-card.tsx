"use client";

import type { ChangeEvent } from "react";

import { useEffect, useMemo, useState } from "react";

type UploadRoomCardProps = {
  title: string;
  description: string;
  fileField: string;
  notesField: string;
  files: {
    id: string;
    file: File;
  }[];
  onFilesAdd: (field: string, files: File[]) => void;
  onFileRemove: (field: string, fileId: string) => void;
};

export function UploadRoomCard({
  title,
  description,
  fileField,
  notesField,
  files,
  onFilesAdd,
  onFileRemove
}: UploadRoomCardProps) {
  const [imagePreviews, setImagePreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    const nextPreviews: Record<string, string> = {};

    files.forEach((entry) => {
      if (entry.file.type.startsWith("image/")) {
        nextPreviews[entry.id] = URL.createObjectURL(entry.file);
      }
    });

    setImagePreviews(nextPreviews);

    return () => {
      Object.values(nextPreviews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const hasFiles = files.length > 0;

  const groupedFiles = useMemo(
    () =>
      files.map((entry) => ({
        ...entry,
        isImage: entry.file.type.startsWith("image/"),
        isVideo: entry.file.type.startsWith("video/")
      })),
    [files]
  );

  function formatFileSize(size: number) {
    if (size < 1024 * 1024) {
      return `${Math.max(1, Math.round(size / 1024))} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length) {
      onFilesAdd(fileField, selectedFiles);
    }

    event.target.value = "";
  }

  return (
    <div className="small-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
        </div>
        <span className="rounded-full bg-[#f4f8ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
          Upload
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <label
          className="mb-2 block text-sm font-semibold text-slate-900"
          htmlFor={fileField}
        >
          Add photos or videos
        </label>
        <input
          accept="image/*,video/*"
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1b4f93] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-[#153f78]"
          id={fileField}
          multiple
          name={fileField}
          type="file"
          onChange={handleChange}
        />
        <p className="mt-2 text-xs leading-6 text-slate-500">
          Add clear photos or a quick walkthrough video, then keep adding more as needed.
        </p>
      </div>

      {hasFiles ? (
        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-900">
              Added files ({files.length})
            </p>
            <p className="text-xs text-slate-500">
              Remove any item individually below
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {groupedFiles.map((entry) => (
              <div
                key={entry.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {entry.isImage && imagePreviews[entry.id] ? (
                  <img
                    alt={`${title} upload preview`}
                    className="h-36 w-full object-cover"
                    src={imagePreviews[entry.id]}
                  />
                ) : (
                  <div className="flex h-36 items-center justify-center bg-[linear-gradient(180deg,_#eef4fd_0%,_#f7f1e9_100%)] px-4 text-center">
                    <div>
                      <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2c74d8]">
                        {entry.isVideo ? "Video" : "File"}
                      </span>
                      <p className="mt-3 text-sm font-semibold text-slate-700">
                        {entry.isVideo ? "Video upload ready" : "Upload attached"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 p-4">
                  <div>
                    <p className="line-clamp-2 text-sm font-semibold text-slate-900">
                      {entry.file.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {entry.isVideo ? "Video" : "Image"} · {formatFileSize(entry.file.size)}
                    </p>
                  </div>

                  <button
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                    type="button"
                    onClick={() => onFileRemove(fileField, entry.id)}
                  >
                    Remove File
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm text-slate-500">
          No files added yet. Add as many photos or videos as you want for this room.
        </div>
      )}

      <div className="mt-4">
        <label
          className="mb-2 block text-sm font-semibold text-slate-900"
          htmlFor={notesField}
        >
          Notes
        </label>
        <textarea
          className="textarea-control min-h-24"
          id={notesField}
          name={notesField}
          placeholder="List fragile pieces, oversized items, packed boxes, or anything worth flagging"
        />
      </div>
    </div>
  );
}
