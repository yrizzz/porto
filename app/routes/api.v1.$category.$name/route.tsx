import type { ActionFunctionArgs } from "@remix-run/node";
import * as Utils from "../../../utils/api";
const dataApi = Object.values(Utils);

// Loader function for GET requests
export const loader = async () => {
    // Handle GET requests here if needed
    return Response.json({ message: "This is a GET request" });
};

// Action function for POST, DELETE, and UPDATE requests
export const action = async ({ request, params }: ActionFunctionArgs) => {
    const method = request.method;
    let response;
    console.log(request, params);

    // Iterate through the dataApi to find the matching method and name
    for (const item of dataApi) {
        if (method === item.method && params.name === item.name) {
            switch (method) {
                case "POST": {
                    try {
                        const formData = await request.formData();
                        const postData = Object.fromEntries(formData);
                        const result = await item.code(postData[item.params[0].name]);
                        response = Response.json({ status: 200, message: 'success', data: result });

                    } catch (err) {
                        response = Response.json({ message: 'Failed to fetch' });
                    }
                    break;
                }
                case "DELETE":
                    // Handle DELETE logic here
                    response = Response.json({ message: 'DELETE request handled' });
                    break;
                case "PUT": // Assuming you want to handle UPDATE with PUT
                    // Handle UPDATE logic here
                    response = Response.json({ message: 'UPDATE request handled' });
                    break;
                default:
                    response = Response.json({ status: 405, message: 'Method Not Allowed' });
            }
            return response;
        }
    }

    // If no matching method and name found
    return Response.json({ status: 404, message: 'Not Found' });
};