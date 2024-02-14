import PropTypes from 'prop-types';


function DogToys({ dogToys }) {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-bold mb-10 text-gray-800 dark:text-white">
            {dogToys.map((dogToy, index) => (
                <div key={index} className="max-w-xs overflow-hidden bg-cyan-100 rounded-lg shadow-md dark:bg-gray-800">
                    <div className="p-6">
                        <a href={dogToy.linkToBuy} tabIndex="0" role="link">
                            <img className="object-cover w-full h-56" src={dogToy.image.url} alt="avatar"></img>
                            <div className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-sky-800 hover:bg-slate-800 rounded-full dark:bg-gray-700 dark:text-gray-200">{dogToy.toyName}</div>
                            <div className="block text-xl font-bold text-gray-800 dark:text-white">{dogToy.toyName}
                            <div className="block text-xl font-bold text-gray-800 dark:text-white">{dogToy.estimatedPrice}</div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

DogToys.propTypes = {
    dogToys: PropTypes.arrayOf(
        PropTypes.shape({
            toyName: PropTypes.string.isRequired,
            estimatedPrice: PropTypes.number.isRequired,
            linkToBuy: PropTypes.string.isRequired,
            image: PropTypes.object.isRequired,
        })
    ).isRequired,
};

export default DogToys;

