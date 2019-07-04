import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  headerImage: {
    width: metrics.width,
    height: metrics.height * 0.4
  },
  body: {
    backgroundColor: colors.background,
    height: metrics.height * 0.65,
    width: metrics.width,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: metrics.height * 0.37
  },
  tagsContainer: {
    flexDirection: 'row',
    width: metrics.width * 0.65,
    marginLeft: metrics.width * 0.08,
    flexDirection: 'row',
    marginTop: metrics.height * 0.03,
    justifyContent: 'space-between'
  },
  tag: {
    height: metrics.height * 0.04,
    width: metrics.width * 0.28,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagText: {
    color: colors.white,
    fontSize: 18
  },
  headerText: {
    color: colors.white,
    fontSize: 30,
    marginTop: metrics.height * 0.04,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  bodyText: {
    color: colors.white,
    fontSize: 20,
    marginTop: metrics.height * 0.01,
    marginHorizontal: metrics.width * 0.08,
  },
  authorsContainer: {
    height: metrics.height * 0.1,
    alignItems: 'center',
    marginHorizontal: metrics.width * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  authorName: {
    color: colors.white,
    fontWeight: 'bold'
  },
  authorImage: {
    width: metrics.width * 0.1,
    height: metrics.width * 0.1,
    borderRadius: (metrics.width * 0.1)/2,
    marginHorizontal: 5
  },
  authorLabel: {
    color: 'grey',
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: colors.white,
    height: 1,
    width: metrics.width * 0.84,
    alignSelf: 'center'
  },
  chapters: {
    color: colors.white,
    fontSize: 30,
    marginTop: metrics.height * 0.01,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  chapterTxt: {
    color: colors.yellow,
    fontSize: 20,
    marginTop: metrics.height * 0.01,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  chapterTitle: {
    color: colors.white,
    fontSize: 15,
    marginTop: metrics.height * 0.01,
    marginLeft: metrics.width * 0.08,
    fontWeight: 'bold'
  },
  chapterDuration: {
    color: 'grey',
    fontSize: 10,
    marginTop: metrics.height * 0.01,
    marginLeft: metrics.width * 0.08
  },
  playButton: {
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width * 0.15,
    height: metrics.width * 0.15,
    borderRadius: (metrics.width * 0.15) / 2,
    marginTop: metrics.height * 0.03,
    marginLeft: metrics.width * 0.1
  }
});
