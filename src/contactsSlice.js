import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),

    createContacts: builder.mutation({
      query: (obj) => ({
        url: "./contacts",
        method: "POST",
        body: {
          name: obj.name,
          number: obj.number,
          id: obj.contactId,
        },
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `./contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),

    editContacts: builder.mutation({
      query: ({ name, number, contactId }) => ({
        url: `./contacts/${contactId}`,
        method: "PATCH",
        body: {
          name: name,
          number: number,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
  useEditContactsMutation,
} = contactsApi;
