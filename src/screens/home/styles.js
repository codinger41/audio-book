import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  headerText: {
    color: colors.white,
    fontSize: 30,
    marginTop: metrics.height * 0.1,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  subHeaderRow: {
    flexDirection: 'row',
    margin: metrics.width * 0.08,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subHeaderText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
  },
  shopButton: {
    backgroundColor: colors.yellow,
    width: metrics.width * 0.25,
    height: metrics.height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shopText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold'
  },
  totalText: {
    color: colors.grey,
    fontSize: 17
  },
  totalText2: {
    marginLeft: metrics.width * 0.08,
    color: colors.grey,
    fontSize: 17
  },
  image: {
    width: metrics.width * 0.3,
    height: metrics.height * 0.17,
    borderRadius: 15,
    margin: metrics.width * 0.01,
  },
  imageList: {
    height: metrics.height * 0.18
  },
  lists: {
    height: metrics.height * 0.37,
    width: metrics.width,
  },
  audioBooksContainer: {
    height: metrics.height * 0.37,
    width: metrics.width,
    backgroundColor: colors.yellow,
    marginTop: metrics.height * 0.02,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  audioBooksHeaderText: {
    color: colors.white,
    fontSize: 30,
    marginTop: metrics.height * 0.03,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  playButton: {
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width * 0.2,
    height: metrics.width * 0.2,
    borderRadius: (metrics.width * 0.2) / 2
  }
});
