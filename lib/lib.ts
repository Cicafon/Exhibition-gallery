const placeHolderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3fegNa5a5si6R-U2zMlldvLxAAbMSWtBnxfRzTp2SsPE1_wJj06UJqf_As34AOG6SI0&usqp=CAU";

const url = process.env.NEXT_PUBLIC_EXHIBITION_URL

export const getAllExhibitions = async (page: number) => {
  try {
    const response = await fetch(
      `${url}?page=${page}`
    );
    const data = await response.json();
    if (data.error) {
      throw new Error("cannot fetch");
    }
    const mappedData = data.data.map((exhib: any) => {
      return {
        id: exhib.id,
        title: exhib.title,
        picture: exhib.image_url ? exhib.image_url : placeHolderImg,
        aic_start_at: exhib.aic_start_at ? exhib.aic_start_at.toString() : "",
        aic_end_at: exhib.aic_end_at ? exhib.aic_end_at.toString() : "",
        description: exhib.description,
      };
    });

    return { data: mappedData, status: "success" };
  } catch (err) {
    return {
      data: null,
      status: "error",
    };
  }
};

export const getSingleExhibition = async (id: string) => {
  try {
    const response = await fetch(
      `${url}/${id}`
    );
    if (!response.ok) {
      throw new Error("cannot fetch");
    }
    const data = await response.json();
    const mappedData = {
      id: data.data.id,
      title: data.data.title,
      picture: data.data.image_url ? data.data.image_url : placeHolderImg,
      aic_start_at: data.data.aic_start_at ? data.data.aic_start_at : "",
      aic_end_at: data.data.aic_end_at ? data.data.aic_end_at : "",
      description: data.data.description,
    };

    return { data: mappedData, status: "success" };
  } catch (err) {
    return {
      data: null,
      status: "error",
    };
  }
};
