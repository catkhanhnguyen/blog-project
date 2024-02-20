import PropTypes from 'prop-types';

function ContentPost({ post }) {
  return (
    <div className='font-serif mx-[70] md:mx-[100px] mt-4'>
      <h2 className='text-[40px] mt-5 text-center'>Ingredients</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {post.ingredients.map((ingr, index) => (
          <div key={index} className="text-center">
            • {ingr}
          </div>
        ))}
      </div>

      <div className='bg-black text-white rounded-2xl'>
        <h2 className='text-[40px] mt-8 text-center pt-4'>Instructions</h2>
        <div className='pb-8 mt-4'>
          {post.instructions.map((inst, index) => (
            <div key={index} className="px-8 py-2">
              <span className='bg-white px-2 py-1 text-black rounded-[50%] items-center mr-4'>{index+1}</span> {inst}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ContentPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default ContentPost;