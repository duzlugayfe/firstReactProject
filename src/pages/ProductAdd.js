import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <FormField>
          <Field name="productName" placeholder="Ürün Adı" />
          <ErrorMessage
            name="productName"
            render={(error) => (
              <Label pointing basic color="red" content={error} />
            )}
          />
        </FormField>
        <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı" />
        </FormField>
        <ErrorMessage
          name="unitPrice"
          render={(error) => (
            <Label pointing basic color="red" content={error} />
          )}
        />
        <Button color="green" type="submit">
          Kaydet
        </Button>
      </Form>
    </Formik>
  );
}
