import { StyleSheet, Font } from '@react-pdf/renderer';
import HeinemannSchool from '../../../../static/fonts/HeinemannSchool.ttf';
import HeinemannSchoolItalic from '../../../../static/fonts/HeinemannSchool-Italic.woff';
import HeinemannSchoolBlack from '../../../../static/fonts/HeinemannSchool-Black.woff';

Font.register({ family: 'Heinemann School', src: HeinemannSchool });
Font.register({ family: 'Heinemann School Black', src: HeinemannSchoolBlack });
Font.register({ family: 'Heinemann School Italic', src: HeinemannSchoolItalic });

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Heinemann School',
    fontWeight: 600,
    backgroundColor: 'white',
  },
  modelBox: {
    backgroundColor: '#f8fbfd',
    border: 'solid 3px #244b86',
    padding: '10px',
    borderRadius: '5px',
    margin: '50px 30px',
  },
  headerH3: {
    color: 'white',
    padding: '50px 30px',
    margin: 0,
  },
  pageBackground: {
    padding: '30px',
  },
  bodyContainer: {
    fontSize: '14px',
    padding: '28px',
    backgroundColor: 'white',
    border: 'solid',
    borderWidth: '3px 4px 3px 5px',
    borderRadius: '4% 2% 6% 5%',
    height: '100%',
  },
  bodyHeader: {
    fontSize: '16px',
    paddingBottom: '20px',
    fontFamily: 'Heinemann School Black',
  },
});

export default styles;
