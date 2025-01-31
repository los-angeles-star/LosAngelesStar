const cacheControl = (values) => ({ res }) => {
	if (typeof window !== 'undefined') return;

	const cacheControlValue = Object.entries(values)
		.map(([key, value]) => `${key}=${value}`)
		.join(',');

	res.setHeader('Cache-Control', cacheControlValue);
};

export default cacheControl;
