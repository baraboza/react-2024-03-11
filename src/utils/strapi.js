import qs from 'qs';

const API_BASE_URL = 'http://localhost:1337/api';

export const getStrapiApiUrl = (path, params) => {
	const queryString = qs.stringify(params);

	return `${API_BASE_URL}${path}${queryString ? `?${queryString}` : ''}`;
};

export const getStrapiNormalizedData = (data, params) => {
	if (Array.isArray(data)) {
		return data.map(item => getStrapiNormalizedData(item, params));
	}

	const normalizedData = {
		id: data.id,
		...data.attributes,
	};

	if (params && typeof params.populate === 'object' && !Array.isArray(params.populate)) {
		Object.entries(params.populate).forEach(([key, value]) => {
			if (value?.fields === 'id') {
				const attributeData = normalizedData[key]?.data;

				if (!attributeData) {
					return;
				}

				if (Array.isArray(attributeData)) {
					normalizedData[key] = attributeData.map(item => item.id);
				} else {
					normalizedData[key] = attributeData.id;
				}
			}
		});
	}

	return normalizedData;
};
