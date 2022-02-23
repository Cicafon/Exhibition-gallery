import { sendRequest } from "./sendRequest";

const placeHolderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3fegNa5a5si6R-U2zMlldvLxAAbMSWtBnxfRzTp2SsPE1_wJj06UJqf_As34AOG6SI0&usqp=CAU";

const url = process.env.NEXT_PUBLIC_EXHIBITION_URL;

export const getAllExhibitions = async (page: number) => {
  const result = await sendRequest(`${url}?page=${page}`);

  if (result.data) {
    const mappedData = result.data.map((exhib: any) => {
      return {
        id: exhib.id,
        title: exhib.title,
        picture: exhib.image_url || placeHolderImg,
        aic_start_at: exhib.aic_start_at ? exhib.aic_start_at.toString() : "",
        aic_end_at: exhib.aic_end_at ? exhib.aic_end_at.toString() : "",
        description: exhib.description,
      };
    });
    return { ...result, data: mappedData };
  } else return result;
};

export const getSingleExhibition = async (id: string) => {
  const result = await sendRequest(`${url}/${id}`);
  if (result.data) {
    const mappedData = {
      id: result.data.id,
      title: result.data.title,
      picture: result.data.image_url || placeHolderImg,
      aic_start_at: result.data.aic_start_at || "",
      aic_end_at: result.data.aic_end_at || "",
      description: result.data.description,
    };

    return { ...result, data: mappedData };
  } else return result;
};
