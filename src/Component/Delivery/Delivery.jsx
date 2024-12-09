
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Delivery.css'; // Import the CSS file

const Delivery = () => {
  const [step, setStep] = useState(1);

  const deliveryValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must be digits only'),
    building: Yup.string().required('Building name or number is required'),
    city: Yup.string().required('City is required'),
    pinCode: Yup.string().required('Pin code is required').matches(/^\d{6}$/, 'Pin code must be exactly 6 digits'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required')
  });

  const billingValidationSchema = Yup.object({
    cardHolderName: Yup.string().required('Card holder name is required'),
    creditCardNumber: Yup.string().required('Credit card number is required').matches(/^\d{16}$/, 'Credit card number must be 16 digits'),
    expiryDate: Yup.string().required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Expiry date must be in MM/YY format'),
    cvv: Yup.string().required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits')
  });

  const handleSubmit = (values) => {
    alert('Your Order Placed Successfully');
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: '',
          phone: '',
          building: '',
          city: '',
          pinCode: '',
          state: '',
          country: '',
          cardHolderName: '',
          creditCardNumber: '',
          expiryDate: '',
          cvv: ''
        }}
        validationSchema={step === 1 ? deliveryValidationSchema : billingValidationSchema}
        onSubmit={(values) => {
          if (step === 1) {
            setStep(2);
          } else {
            handleSubmit(values);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {step === 1 && (
              <div className="step-content">
                <h2>Delivery Information</h2>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <Field type="text" id="phone" name="phone" />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="building">Building Name/Number:</label>
                  <Field type="text" id="building" name="building" />
                  <ErrorMessage name="building" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <Field type="text" id="city" name="city" />
                  <ErrorMessage name="city" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="pinCode">Pin Code:</label>
                  <Field type="text" id="pinCode" name="pinCode" />
                  <ErrorMessage name="pinCode" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State:</label>
                  <Field type="text" id="state" name="state" />
                  <ErrorMessage name="state" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country:</label>
                  <Field type="text" id="country" name="country" />
                  <ErrorMessage name="country" component="div" className="error" />
                </div>
                <button type="submit">Next</button>
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <h2>Billing Information</h2>
                <div className="form-group">
                  <label htmlFor="cardHolderName">Card Holder Name:</label>
                  <Field type="text" id="cardHolderName" name="cardHolderName" />
                  <ErrorMessage name="cardHolderName" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="creditCardNumber">Credit Card Number:</label>
                  <Field type="text" id="creditCardNumber" name="creditCardNumber" />
                  <ErrorMessage name="creditCardNumber" component="div" className="error" />
                </div>
                <div className="form-group form-group-inline">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
                    <Field type="text" id="expiryDate" name="expiryDate" />
                    <ErrorMessage name="expiryDate" component="div" className="error" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <Field type="text" id="cvv" name="cvv" />
                    <ErrorMessage name="cvv" component="div" className="error" />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Delivery;
