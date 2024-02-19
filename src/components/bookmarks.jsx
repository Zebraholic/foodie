import PropTypes from 'prop-types';


export default function Bookmarks({ bookmarks }) {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-bold mb-10 text-gray-800 dark:text-white">
            {bookmarks.map((bookmark, index) => (
                <div key={index} className="max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-md dark:bg-gray-800">
                    <div className="p-6">
                        <a href={bookmark.url} tabIndex="0" role="link">
                            <img className="object-cover w-full h-56" src="https://images.ctfassets.net/7ia388dwlfn1/5Gos2653ncbYPpDysKbg60/32247d22c12cc570e34135e2fdbeecfe/contentful-logo.png" alt="avatar"></img>
                            <div className="py-5 text-center">
                                {bookmark.tagsCollection.items.map((tag, index) => (
                                    <span key={index} className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-sky-800 hover:bg-slate-800 rounded-full dark:bg-gray-700 dark:text-gray-200">{tag.title}</span>
                                ))}
                            <div className="block text-xl font-bold text-gray-800 dark:text-white">{bookmark.title}</div>
                                <div className="text-sm text-gray-700 dark:text-gray-200">{bookmark.comment}</div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            tagsCollection: PropTypes.object.isRequired,
        })
    ).isRequired,
};


