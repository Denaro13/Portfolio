import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "a1gf74lvsba6",
  environment: "master",
  accessToken: "pugKWSxdOj0JW7WYGoAoKzCHte77XKc_LaZzGc4W9Qo",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "myProjects" });

      const projects = response.items.map((project) => {
        const { title, url, image, techList } = project.fields;
        const id = project.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img, techList };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

// client
//   .getEntries({ content_type: "myProjects" })
//   .then((response) => console.log(response));
