import PropTypes from 'prop-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';

function GithubLink({ url }) {
    return (
        <a className="mx-2" href={url} aria-label="GitHub">GitHub</a>
    );
}

GithubLink.propTypes = {
    url: PropTypes.string.isRequired,
};

function LinkedinLink({ url }) {
    return (
        <a className="mx-2" href={url} aria-label="LinkedIn">LinkedIn</a>
    );
}

LinkedinLink.propTypes = {
    url: PropTypes.string.isRequired,
};

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [INLINES.HYPERLINK]: (node, children    ) => <a href    = {node.data.uri}>{children}</a>,
    }
}

function Person({ person }) {
    const { name, socialGithub, socialLinkedin, avatar, image, bio, topicTitle } = person;


    return (
        <>
        <div className="max-w-2xl mb-8 overflow-hidden bg-white rounded-lg shadow-md bg-slate-200">
                <img className="object-cover w-full h-64" src={image.url} alt={image.url} />

                    <div className="p-6">
                        <div>
                            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{topicTitle}</a>
                            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{documentToReactComponents(bio.json, RICHTEXT_OPTIONS)}</div>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={avatar.url} alt={avatar.title}/>
                                    <div className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{name}</div>
                                    </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"><GithubLink url={socialGithub} /></span>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"><LinkedinLink url={socialLinkedin} /></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        socialGithub: PropTypes.string.isRequired,
        socialLinkedin: PropTypes.string.isRequired,
        topicTitle: PropTypes.string.isRequired,
        avatar: PropTypes.object.isRequired,
        image: PropTypes.object.isRequired,
        bio: PropTypes.object.isRequired,
    }).isRequired,
};


export default Person;


