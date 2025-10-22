import React, { useState } from 'react'
import FormInput from '../components/common/FormInput'
import FormSelect from '../components/common/FormSelect';
import FormButton from '../components/common/FormButton';

function AddCustomer() {
     const [plan, setPlan] = useState("");

  const subscriptionOptions = [
    { label: "Basic", value: "basic" },
    { label: "Premium", value: "premium" },
    { label: "Pro", value: "pro" },
  ];

  return (
    <form className='max-w-4xl mx-auto'>
        <h3 className='text-xl mb-4'>Add Customer</h3>
         <FormInput
        label="Full Name"
        id="fullname"
        placeholder="Enter full name"
      />
      <FormInput
        label="Age"
        id="age"
        type="number"
        placeholder="Enter age"
        required
      />
      <FormInput
        label="Contact Number"
        id="number"
        type="number"
        placeholder="Enter Number"
        required
      />
       <FormSelect
        label="Subscription Type"
        id="subscription-type"
        options={subscriptionOptions}
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      />
          <FormButton text="Add Customer" type="submit" />
      
    </form>
  )
}

export default AddCustomer
