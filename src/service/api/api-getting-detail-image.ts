import { IGettingImages } from "../../util/interface";

export async function getDetailPhoto(id:string) {
	try {
		const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = (await response.json()) as IGettingImages;
		return result
	} catch (error) {
		if (error instanceof Error) {
      return error.message;
    } else {
      return 'An unexpected error occurred';
		}
	}
}