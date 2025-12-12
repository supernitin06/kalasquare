"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface SongFormData {
  name: string;
  song: string;
  songLink: string;
  views: string;
  image: string;
}

export default function CreateSong() {
  const [formData, setFormData] = useState<SongFormData>({
    name: "",
    song: "",
    songLink: "",
    views: "",
    image: "",
  });

  // Convert image to Base64
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/landing/songs",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      alert("Song Created Successfully!");
      console.log(response.data);
    } catch (error: any) {
      console.error("Create song error:", error);
      alert(error?.response?.data?.error || "Error creating song");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Create Song</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artist Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Song Name"
          className="border p-2 rounded"
          value={formData.song}
          onChange={(e) => setFormData({ ...formData, song: e.target.value })}
        />

        <input
          type="text"
          placeholder="Song Link"
          className="border p-2 rounded"
          value={formData.songLink}
          onChange={(e) =>
            setFormData({ ...formData, songLink: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Views"
          className="border p-2 rounded"
          value={formData.views}
          onChange={(e) => setFormData({ ...formData, views: e.target.value })}
        />

        <input
          type="file"
          className="border p-2 rounded"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Create Song
        </button>
      </form>
    </div>
  );
}
