import { makeStyles } from '@material-ui/core'
import { colors, typography } from '@static/theme'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    maxWidth: '918px',
    width: '100%',
    padding: '30px 0 30px 0',
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    gridTemplateColumns: '21% 25% 11% 19% 12% 12%',
    backgroundColor: colors.invariant.component,
    color: colors.invariant.textGrey,
    '& *': {
      whiteSpace: 'nowrap',
      ...typography.caption2
    },
    [theme.breakpoints.down('sm')]: {
      ...typography.caption1,
      gridTemplateColumns: '23% 29% 13% 21% 14%'
    },
    [theme.breakpoints.down('xs')]: {
      ...typography.caption3,
      gridTemplateColumns: '33% 34% 33%',
      padding: '24px 0 16px 0 '
    }
  },

  vesting: {
    padding: '4.5px 0 4.5px 0',
    justifyContent: 'center',
    marginRight: 'auto'
  }
}))