const Review = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h1>Review Page</h1>;
};

export default Review;
