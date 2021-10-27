import { makeStyles } from '@material-ui/core/styles'
import { colors, newTypography } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    background: colors.invariant.componentOut1,
    borderRadius: '10px',
    padding: '20px 17px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  iconsGrid: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: '40px'
  },
  arrowIcon: {
    width: '25px'
  },
  namesGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    '& #pause': {
      padding: ' 0px 3px'
    }
  },
  name: {
    ...newTypography.heading1,
    color: '#FFFFFF'
  },
  leftGrid: {
    display: 'flex',
    flexDirection: 'row'
  },
  rightGrid: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px 0'
  },
  text: {
    ...newTypography.body1,
    color: colors.invariant.lightInfoText,
    backgroundColor: colors.invariant.componentOut2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px'
  },
  feeText: {
    minWidth: '110px'
  },
  minText: {
    minWidth: '175px'
  },
  maxText: {
    minWidth: '175px'
  },

  rangeGrid: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10
  },
  button: {
    backgroundColor: colors.invariant.accent2,
    color: colors.invariant.componentOut2,
    ...newTypography.body1,
    textTransform: 'none'
  },
  closed: {
    backgroundColor: colors.invariant.componentOut2,
    color: colors.invariant.lightInfoText,
    ...newTypography.body1,
    textTransform: 'none'
  }
}))
export default useStyles
