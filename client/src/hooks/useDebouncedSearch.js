import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";
import React, { useState } from "react";

// Generic reusable hook
export default function (searchFunction) {
	// Handle the input text state
	const [text, setText] = useState("");

	// Debounce the original search async function
	const debouncedSearchFunction = useConstant(() =>
		AwesomeDebouncePromise(searchFunction, 1000)
	);

	// The async callback is run each time the text changes,
	// but as the search function is debounced, it does not
	// fire a new request on each keystroke
	const results = useAsync(async () => {
		if (text.length === 0) {
			return [];
		} else {
			return debouncedSearchFunction(text);
		}
	}, [debouncedSearchFunction, text]);

	// Return everything needed for the hook consumer
	return {
		text,
		setText,
		results,
	};
}
