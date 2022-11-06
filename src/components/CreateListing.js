import React from 'react';

const CreateListing = () => {
  return (
    <div>
      <form>
        Item Name
        <br />
        <input type="text" />
        <br />

        Price
        <br />
        <input type="text" />
        <br />

        Description
        <br />
        <input type="text" />
        <br />

        <button type="subtmit">Post Listing</button>
      </form>
    </div>
  )
}

export default CreateListing;