import { useState } from "react";

export default function AddResourceModal({ setShowModal, addResource }) {
  const [formData, setFormData] = useState({
    type: "pdf",
    title: "",
    author: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = {
      ...formData,
      date: "Just now",
      department: "Computer Science",
      year: "2nd year",
      likes: 0,
      comments: 0,
      downloads: 0,
    };

    addResource(newResource);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add Resource</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="pdf">PDF</option>
            <option value="image">Image</option>
            <option value="link">Link</option>
            <option value="youtube">YouTube</option>
          </select>

          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="text"
            name="link"
            placeholder="Resource Link"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
