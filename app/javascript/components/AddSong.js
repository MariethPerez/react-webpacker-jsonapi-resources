import React from 'react'
import { navigate } from "@reach/router";
import { Formik, Field, Form } from "formik";

function AddSong() {

  const handleSubmit = values => {
    const requestSongs = async () => {
      const response = await fetch ("/api/songs", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json"
        },
        body: JSON.stringify({data: values})
      });
      if (response.status === 201){
        navigate ("/");
      }
    }
    requestSongs();
  }

  return (
    <div>
      <h2>Add your post </h2>
      <Formik
        initialValues={{
            type: "songs",
            attributes: {
              title: "",
              body: ""
            }
          }}
        onSubmit={handleSubmit}
        render ={() => (
          <Form>
            <Field type = "text" name = "attributes.title"/>
            <Field type = "text" name = "attributes.body"/>
            <button type = "submit">Create </button>>
          </Form>
        )}
      />
    </div>
  )

}

export default AddSong;