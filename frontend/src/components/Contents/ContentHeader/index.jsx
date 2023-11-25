import PropTypes from "prop-types";

const ContentHeader = ({ title, paragraph }) => {
  ContentHeader.propTypes = {
    title: PropTypes.any,
    paragraph: PropTypes.any
  }

  return (
    <div className="w-[50%] mb-5">
      <h1 className="text-2xl font-bold tracking-wider mb-1 leading-none">{title}</h1>
      <p className="text-sm tracking-wider">
        {paragraph}
      </p>
    </div>
  )
}

export default ContentHeader