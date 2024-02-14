import { useState, useEffect } from "react";

function useContentful(query) {
    let [data, setData] = useState(null);
    let [errors, setErrors] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authenticate the request
                    Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_AUTH_TOKEN}`,
                },
                // send the GraphQL query
                body: JSON.stringify({ query }),
            })
            .then((response) => response.json())
            .then(function ({ data, errors }) {
                if (errors) setErrors(errors);
                if (data) setData(data);
            });
            try {
                window
                    .fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            // Authenticate the request
                            Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_AUTH_TOKEN}`,
                        },
                        // send the GraphQL query
                        body: JSON.stringify({ query }),
                    })
                    .then((response) => response.json())
                    .then(function ({ data, errors }) {
                        if (errors) setErrors(errors)
                        if (data) setData(data);
                    });
                    } catch (error) {
                    setErrors([error]);
            }
            }, [query]);

    return { data, errors };
}
export default useContentful;
