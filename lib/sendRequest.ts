export  const sendRequest = async (requestUrl: string) => {
    try {
      const response = await fetch(requestUrl);
      const data = await response.json();
      if (data.error || !data) {
        throw new Error("cannot fetch");
      }
      return { data: data.data, status: "success" };
    } catch (err) {
      return {
        data: null,
        status: "error",
        error: err,
      };
    }
  };