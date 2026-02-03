// import axios from "axios";

// const hf = axios.create({
//     baseURL: "https://api-inference.huggingface.co/models",
//     headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
//         "Content-Type": "application/json",
//     },
// });

// export default hf;


import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(
    process.env.REACT_APP_HF_API_KEY
);

export default client;
