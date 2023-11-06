import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "a1gf74lvsba6",
  environment: "master",
  accessToken: "pugKWSxdOj0JW7WYGoAoKzCHte77XKc_LaZzGc4W9Qo",
});

export const useFetchSkills = () => {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "skills" });

      const skills = response.items.map((skill) => {
        const { title, text } = skill.fields;
        const id = skill.sys.id;
        return { id, title, text };
      });
      setSkills(skills);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, skills };
};

// client
//   .getEntries({ content_type: "skills" })
//   .then((response) => console.log(response));
