/* eslint-disable no-undef */
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div>
        <h1 style={HeaderStyle}> {props.title} </h1>
    </div>
  )
}

Header.defaultProps = {
    title: "Game of Memory: Animals",
    creators: "Mingmar Dolma, Alex DeJesus",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const HeaderStyle = {
    textAlign: 'center',
    color: 'purple',
    backgroundColor: 'lightpink',
    marginLeft: "222px",
    marginRight: "222px",
  }
export default Header