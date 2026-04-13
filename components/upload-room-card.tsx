type UploadRoomCardProps = {
  title: string;
  description: string;
  fileField: string;
  notesField: string;
};

export function UploadRoomCard({
  title,
  description,
  fileField,
  notesField
}: UploadRoomCardProps) {
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
          Photos or videos
        </label>
        <input
          accept="image/*,video/*"
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1b4f93] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-[#153f78]"
          id={fileField}
          multiple
          name={fileField}
          type="file"
        />
        <p className="mt-2 text-xs leading-6 text-slate-500">
          Add clear photos or a quick walkthrough video if helpful.
        </p>
      </div>

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
