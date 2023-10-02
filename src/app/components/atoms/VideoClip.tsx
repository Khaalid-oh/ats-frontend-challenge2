import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

function VideoClip() {
  const [showModal, setShowModal] = useState(false);
  const videoId = "6BVJEcsq5U4";
  const thumbnailURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div
        className="relative w-32 h-28 rounded-full cursor-pointer"
        style={{
          backgroundImage: `url(${thumbnailURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setShowModal(true)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16.5L16 12L10 7.5V16.5Z"
              fill="rgba(255, 255, 255, 0.7)"
            />
          </svg>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 rounded-lg">
          <div className="bg-white pt-1 p-4 rounded shadow-lg">
            <button
              type="button"
              className="mb-2"
              onClick={() => setShowModal(false)}
            >
              <CloseCircleOutlined />
            </button>
            <div className=" flex flex-col gap-4">
              <span className="text-sm text-blue-600 font-[500]">
                Video Questions
              </span>
              <span className="text-sm font-[500] mb-3">
                Please tell us about yourself?
              </span>
            </div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoClip;
