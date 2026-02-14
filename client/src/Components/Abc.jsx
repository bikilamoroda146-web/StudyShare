import React from "react";

function Abc({ type, title, author, date, department, year, description, likes, comments, downloads, link }) {
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(likes);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const iconColors = {
    pdf: "text-red-600 bg-red-50 border-red-100",
    image: "text-emerald-600 bg-emerald-50 border-emerald-100",
    link: "text-sky-600 bg-sky-50 border-sky-100",
    youtube: "text-red-600 bg-red-50 border-red-100",
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-sm hover:shadow-md transition">
      <div className="flex gap-3">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${iconColors[type]} border`}>
          {type === "pdf" && <i className="fa-regular fa-file-pdf text-2xl"></i>}
          {type === "image" && <i className="fa-regular fa-file-image text-2xl"></i>}
          {type === "link" && <i className="fa-solid fa-link text-2xl"></i>}
          {type === "youtube" && <i className="fa-brands fa-youtube text-2xl"></i>}
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1">
            <span><i className="fa-regular fa-user"></i> {author}</span>
            <span><i className="fa-regular fa-calendar"></i> {date}</span>
            <span><i className="fa-regular fa-folder"></i> {department} / {year}</span>
            <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px]">{type.toUpperCase()}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-4 mt-4">
            <button onClick={toggleLike} className={`flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full border ${liked ? "bg-indigo-50 text-indigo-600 border-indigo-200" : "bg-gray-50 text-gray-700 border-gray-200"}`}>
              <i className={`fa-thumbs-${liked ? "solid" : "regular"}`}></i> {likeCount}
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-500">
              <i className="fa-regular fa-comment"></i> {comments} comments
            </button>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <i className="fa-regular fa-download"></i> {downloads}
            </span>
          </div>
          {link && <a href={link} className="text-sm font-medium text-indigo-600 mt-2 inline-block">Preview →</a>}
        </div>
      </div>
    </div>
  );
}

export default Abc;
