import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from '../../../store/actions/posts';
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgSFRUYGBUYGBgYGBgZGBgYGBgaGRgaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDEhISM6NDExMTQ0NDE0NDQxNDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0MTQ0MTQ0NDE0MTE0MTE0NP/AABEIAMcA/gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAYFBwj/xAA8EAACAQIEAwUFBwQCAQUAAAABAgADEQQSITFBUWEFInGBkQYTFTKhQlJUk7HB0RRi0vAj4XIWM1OCsv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEBAAICAwEAAAAAAAAAAAERAhIhMUEDIlET/9oADAMBAAIRAxEAPwCWPeADHmwV494JMbNAO8V4GaODAKPBvFeAV494wjwHvHEQEJRGhCPaPkjhY0MBCBhKkQSAhCAiCQhAa0VoRiEKZVhMY0ZpUCxgQorQgYSrHCwwJQlWTrRPKPQok6yyGsfCBJRw4AuZbTLsLSnUctJsMnSFSrvpHLQiLHSOUkGGEe8ciCRICWPaADDQwFlgGT2gskCINCDRMkCESgwxIVMkUwJlhqZEphqIVIJIogIJIIUaiNljRXgEwggRrx4BRrRxHIgAYMIiNKhrRwIhCAhDWiEe0ICBLSqEbQs0BRJaVK5F5VGoM6GGYDTjIqFK5sNpeWkL34yKECPaS2gkQjzz3kfPILxXmcTU2aSK0rBoQaU1aDx7ysGhhoVIxg2jXhCQILCURCPAkUyRTIBJFMKmBhAyINCBhUmaK8GPBgrxXg2jwYMGPmgCKDBExiYrQgkaYBgbG2/C+14SE97NYAEWPPQanzMlVITIDoRpofQ3H1AlTACGogHS5YgDS3Thr5yVBKmJqVMmWBTtaGjgWtvbeDVfhx/SZ22t5JHRoAEd39JPklHAG27Hrylk45L5frwEWpgiIrQHxi3sNeskZuojTHnBoGAaRndw+UDUa85WqpreVPGOWqSQU5dVBHNIQYp+7hLTlzLHyyGKgpGLIZcyxysLikFhBZZKRCnIYgAhhZOKYGpIA6kD9YsOVcsovdTY32PhGmIlSSqksLRkwoQqqKcWSX1pRzSEg55EG0uvh5Eaci4gyxwJOKccUY0xCIQkwpR/diXTALHtC92I+XpNamBkZNicq3J1OthoLDU6X20hmmLAW0FrDgLbQrRqYmFXS0A1DIgLf7eOIhU4raWEhNSMxg3mipQ+nWTU362lZRyhFTwEgpbcYNxAJjGQGQI6gGCIdJbmwFydgIUmSCBO1huywbe9fKPujVvM8J1FwtOnqtIMD9od+/mbzOpaydoarNioVhrRFuqSq+Fwx3XL/wCLEfTaNNZxUkmUTv1uyEBAVXYHUEMLeZ4TjdoY2kgKKlnUkEszEaaaSeSs9juxndxUNduPdygBRfQLr147zvYHssopyo7ZtWax19BoPCc/G9lOaqOz2pFFd2v3FW9zc8zynXwOLd3NZstKgrCy7MVA7oAGxbe0mgcnAj1kiJOkmPp1Veq7AU1J1a1wfurbXl6zmL2kjOEp07rcC5OYm53I4eUaDZIyiW8bUoBsobI1r23H8xUMIzrmSzDpp+sa0gMiKSd0K6EEHrAIjVxFljFZLaCRJq+KIiLLJMsWWPI8UVoxEmFOEKUulitaJpZKCCUllZxVyxESYrBZZrUxARBkrLBCS6mHSTNWPOR5IiOUDm5YMnCR2pzPkuIkUnQbnSd/CVcNRXKzgv8AabUeQNtv1maxuJ92O6CXI0sCbDnpxmWxnadRXBZSOWYbzNrNeoVaiOpNOp53DDwM4I7cqUmKh7EGxG49Ji8L2m6VA6nun51GxHTXhNJTehXF73biR3X9OMlpI72C9sXDAVACn3h83jaSduWZf6im3cIBIG2v2h9LzC9sYd6JzKcyE2vxB5NLXZ/awGFqo50vlUXvqw2+l41caL2f7Tc1QudiioxIuco2HhuZwMXijWrtbUO5t1udPpHxFT3GFJGj1MoY8e9wB4WF/Wc72ce7tUOyDKD1bc+g+sn0v27nbfbF6lPBAZaalAXDWb5dgNhuNZR7SxSoBhUVgEcsWJ7zMwFnLDS1pncbi/eVHfW9yR4A2X6WnXwOJXEj3dWwqqtlf7wHBhxIikdX2gxBREw6m6ooYm+rNc2v9T5xhXfCUhXNi7WGU3trc5RbbTcym+Oz1UpuozghGI+VtdCPX6y12733WmeQA5XY7/7ymNbkUuy+0nxFQlxcE3dtdOg4cLCdnG+07IP6fDnbRiD8gH2QR9ZxcQxQDB0R32uC3EDYknmbEybA9kJhyK1Z9VPdUbMR03Y/SL0TlufZ01qmHJrgA3umupH/AHrpLXuJmuxPaL3lYBlZVAZluDlsoubnYmbYUtFYbMAfWNWenO9zG93OqmCJ4iH8OPMS+zyn9cf3cb3c6/w/+4Q/ho5xlPPlxfdxvdztHs/lCTs4cT6S5UvXLhmjBNGaX+kXlHGGQaZRNSVnyjMf05PCOMGx4GadaYGwAiZRGVPOfxlhhCdLQv6A7nQTR5FHASGpY6ZRJtWWX6Zh6dpD7s8pqRQXkt4QoryHpL5UuMahElAEgQSZRLhrN9ue0KI7Ue9dTY2Atf16zh/E6b6E36MP2ln2uSnTr5nS/vFD3sNSO6db9B6zKVXpk6Ky+cjNdp8Dc3psCPuk6+R/mU2LoQWDIQbqdvMHjKdDGMh7r3HIi07eGxyVlKNy1B/UGPg9Vewfavv0am4uw3/uG1+hmbxIyOad9Fb15H0j4aqadUa7MVPUbf8Acm7aHfDDiPqP9EZ7Pp2e3q4alvqHGX0sT5Ayp2ZUKUHYb94+gsPrIcTWvS0FzlUE8gbE26kn6RUrDDHmQ3/64yfS/aDss2Dsde7b13/SNRrWIqKbEG46W4eEbDGyN1J/SV0NhpzhGg7Uq5gmJXfQHy1HoQR6S72jWOaliBqpy5rdDmH7+k53ZLB0aieIuv72+hlugpVGoOL2vbqDqCPAzl1cd+ZqTGOf6k1EP2L+mn8Sk1VnK1KnezMxIv8AZFgqAcrnzk2HoEtm3IAH7ehtbzkzYcDKCbKCDcC/cYjN5gX9JzvbrOD0qrOyU0dixfW+gRdiBy0v6Cen+zvaYqaEdy+Sn1CLqeuw9Z53gcMQzsfmUe7B5sbr56X18JquyK4pkMdEpD3aD7znRj+pjnv2z3xsbsHkPOJzpGosCARxAPrDYT0/Tx/aupsZZBlcjjHzmSdY1ZqYmNeRe+6QTWE15J41OYJMgNWAakeS+NWCYDtK7VZE1TrJ5L4rDRiZVatANeRcWs0Yt0+sptipGcXLgzlNpapESmgMnQmW1HP9ruy0q0PeZbtSu+2uW3fA9Abf2zzF1pk6d0ec9lGuh1B0I5jlPL+3uzqdGq1PaxuASb5W1X+PKSUvtxPdpewaSIFQ5g+o2A4+cCqiX0JP++ESBN736GbZM+Y988Tf95ex75lB5H9ZBnL6bIN47nOdNFWZVYpqTQPjf0P/AGZNhz/wlej/ALx8PYpk45besLCVAEyEa2I9SZm1ucq1FTk9Y1ChmW3Gdn2d9n6uJZ6aFVyAMS9wO8bACwOpsfSQYbCsjshFmVipB5g2I+kz11jXPOrXYfZbVKiKLjvoDbQgFgCR5T0XtT2Ou4qUSMuxRja22oPETg+zmHBrUy1NgcyHMCdwwtfpPUwZniTuXyX8nV4sxxML7O0VVFZFYqpU3A1JYMT6gzl9vex6uM9CyMAe6T3WvvqdQfpNhGvOl/HzZmOM/J1LuszjfZtMqul1dApIGoaygEkfe0Bv0mdagUdQbPbWmv2STqzv5/pPRyZiDXVnek9rq7hGI0+Y2G+vDxnD83PMyx3/AA99XZWr7NrZqanMGPFhtJ2aU+z2yIqtlHVRZT/BlsmdefiONn7UxkTuBa5tc2HUnhHr1goLMQAJmcd2+WcKqkIpNybgtw04W1vJ11I6c83r4aNzIyZnsL7QW0c3txtY+dun6GdRO0KbbONeB8AbH1Es6lLzYtF4DPBbnImhCdzzkLPzjPInvNQp3qyP3sjczmV+1qSmxcXvbQE28SNJr0z7dOrilUEsbATi4rtk3sEsOBbQnyMoY72hTZAG55gR6CcCvj2Y3J5842fRjWpiV6/SWExC85lBi/7pOmLvu5nPWvFrFrrzmZ9ucCj0xiN2p2U23KM37E38zGSsPvGGzqQQToeBEeR4vPGYfZW3jAvrsJ1e2MGVchMoQ6jhvuPWc6pTCm183UbTpK5V1uyuw6+IXMirkBy6uqAm1+O45zU4f2CY2D4mmo4hFLHyJIlj2YUJhkFgpIJIvfUk7nnO2lTqJz669uvPPpne3fY1KNIVqNViyEZ8xXVToCLDSxt5HpM/Tw/vNrLUXcbZuonomIph0emTo6svqLXnntJO8KbtkqA2SpwNjbK3nM7a1Jj0b2CwjJRdnXK7PblcIot9SZk+3aQGMrjQ3cts9+8A32fGbTsMOtJFq2zi9yNiL906dLTFe07WxdQXsDkOr5R8i+sxZsxvn51ofZCn/wA69youUM2vyaC29uZm/DzE+yK6M/QDSrnG9/lt3dhNF7zqZeb4xnr9q6vvIjW6zlhzGLzflWfCOn78cxPNHxJes5XObu9igDfaNu7uZtKtUKrOdlBY+AF/2nn3s4nvKy3F9cxuC1tbm5BBHRtuc5971jp+POdr03A0siqATfKM3U21JHA+EnvOfntHGKIllxiz7cPF4XE1HcMjFc5ykkAZbnLY+FtoFLsOoVIbKhtYXNxw5ec0BxF9wJGxU/ZEnjF8rJjB47BVKRAYXGuo1HzKNxuveB65bHjKAxBBtfTujqb5mdvG4A9J6JXoowKkaEEHzmE7ewIovbdTqDbccQQOQB9BNzlPKjw/btRNS2hKk8rZ6asfIOfK0ZPaqsMis1iXam+xsyqLW2+Y6icTEOCpHO/ncWYb63HgNBoLa8utWNmubkhGv/fTbLm81Impyze2rHtbVNrhiz/IigFzY2ZnNrILg6AH6SCr7XVFOVyc52Snkdh/5ubgHoomeqVO85DFS9QqWG60wuZgOVyTKqv/APGQg/sUvU011O4P03m5yze2pftWpW7rrURDx0I/+1gNPKS1cFTt3Kh1tcFreI9eMyakAEldbEg1KjZzpwRf3mt7Hwxq0EqfeB+hK/tM2Y1Otc6phUvoWAvrsdOhB1gDDJxY24WBv5id/wCF87QD2SeGsaWMkG6xCsb7nhOYuI6yVaomcsXXSSow+1J0qNbe/hrOYtVdL/rLNPGKOMqB7W1VWKg2a3e03HDXpKGMQ5EYhBuMqWuBwZwDx/aTY3F50y/3X2vz3v4yI1P+MppuDpfccbm3hxnSfDn18th7P4hfcIBbiO7ca3N9DqTOyjjhMH2Z2iyqFB2ubFiSegvt4TuUu1Gy3/acuubrrzZY1CFuBEw+JdXqu1Ozguxam2l9dSh67+cHH9rPUBUsyDNdbMcpsLWLDcX1kOAoF2vUAYD7YYhtORHHxlnOe6l625Hovs849wmUPl71g/zL3j3T0GoHQCZD2mrFsW9kRrFF7xGpCL1ncw3a9lsOAAHMzGYk+8r1WKEsXY3BYg97Qd0Hh+knPu1evUj0b2ZfJS7yIhY3tT2IsLG43O87a4jw/SY7AYpaaKgGUWvYEsLnU2Y7i8tp2hxBvMW+25z6atcQOkE4lZm0x7HXYH/byZK99bzN6WcrXtBjwmGqEGxKFR4sQvDxnC9kUAc1Gt3RYX3BPGx1Gl9QbHxEr+0L51WmpzZnuQBc5VFz3QQSLkbSTD1lpoFzAW4C+nkQLcOHrvNS/rqZ+2NecUPvCAaw5/WZRe01vcsfSSfElJGpPgZNXGm9+Ocf+pHC5mb+JLwNzfZif28ZDU7VI226bc9olpZGofFW4TNe19fNSGgDBtDfnwA4k8ukpHtdr7ecoV8eS+d9bfINwDrdvGdeXPqRWweHz1FpVc1MsDcqAGHdzLvcSbFeyhF8mIBBvoya66G5U9JVxGMzVEqXNwRfTUAf9EyWt2xbQGa2seM+0a+zRv8A8lUkbkIup0A3Y6eNpye1cDkrEU+6pKhe9cjMANTvveX/AIiTxJ8z/MqYuve3O4I5TUtSyYLE4M08yhgVIOqgLmHG9gLW5FteRms7Gx6Jh0poQVVbZjoSbktccDcmZCri8w426c+ciw9QAtfS/Lbjr0mepsXnOa3jdt22UH0kJ9pANGXWYx6673+v7SB8R1+szOWr0qJrcRO9h/vGQlrGE7Xms9pvo5rRK5gWHKOHt4zUYomc2jLUOw2kZN4aS4yuYMPe4JH08ry+a+lsx5ETm/1B/SC9cnjJZrc6kiai5vx358b6TsUq6jcm/j9RacKk1oecyXnTnrHbxGOFjwPjrORSq5SSN/E3kLNHUS88yJ11eq0tLtUOgD5swsMxbMMvK24j08aBoLb9ZxKAFtZKvTXlOfXMtdeerI0uGxxudBbhx8ZK+MJ1Fltz4/zOHhqlh3tRrb+IOJx+tuA4Wt+k5Xja6+WRcbEOahdgjJa1mANvC438xCNW/DU7HS/jKeBxK5hnPcvqbXNuMnxWIGchLsgJAa1rj9pLbs5SePz/AE9Q6HX1/SVxWIsSDpsNvOQ1cQR0JkT1Dx6WnTmVOrF01+YIHPSHnOym4PrKJq8iPC3+9I1PFW1sdxci1zLlh6WjV429NZUR8wNybg7H9tZM2KvzHC3PxM5zsL36+svO/wAZ6kiaq5XUG8Fa5tckERFwb2IsdbWlYm3hvNfLN9XVh3QDnp/Eg95fWw/i3AQcw8+ciew1B1EsidX7OanSMzi400846Veciram4vNYxb6Iv09IJYcoSG+hhe7Eno91UzDnCDifUHwPDfhqH5Sf4xfA8N+GoflU/wDGaxnXy8z9Y2brPqL4Hhvw1D8qn/jF8Dw34ah+VT/xjDXy+D1jlhzn0/8AA8N+GoflU/8AGL4Jhvw9D8pP4lR8w5usIMOc+nPgmG/D0Pyk/iL4Jhvw9D8pP4gfMyuOcIVBPpf4Jhvw1H8pP4lCtSwKlVNLDd5il8lGysBfKx4HpvIuvngMIV59D4ihgEy56eGXM2VbrSFz3unNWHiLRYelgHVWWnhSGUsvdpXKjc2tsNb8rRhr55zSenWAP66z36qnZ4GYrhbEqt8tI6ubLw4/tJThMDYnJhrBsh7tLR/uHT5um8nis6seDHFjc7Hh+0r4muHIO0+gMNg8G6CoKFAKVVjmp0wVDLmGbSy6GIYXAfcwvy5/lpfJtm/8eu0TmRb3a8CpPyt152jvV0Pet009dJ7/AIfA4N7lKWHa1rlUpta4uL2GmmsGtg8IrLTahSzOGKj3KnYEm5C2GgO+9jJ4L5+nz81YcZIMSCbm094o0sE1gKFO5fJlNBQ18ofVStwMpBvtqIBGBChzh0CG9m/phaw3b5Pl/u2l8U83hyYhbbgHbSx87SB8R1AnurVMACR7imSCdBhwSQM12AC6qMj6j7sJTgTfLQptuRlw4bMA2VihC94A6EjaTxX/AErwdcUOdvCRvVB46z6Aw1HBOwRaFIllzKfcKFYWUnKxWxsGX1l74Jhvw1H8pP4lxm9WvmsPrGdhzn0t8Ew34aj+Un8RvgmG/DUfyk/iXDXzNn6xe9E+mfgmG/DUfyqf+MXwPDfhqH5SfxGJr5gzjn9YXvOs+nfgeG/DUPyqf+MXwPDfhqH5VP8AxjDXzAaghrV6+hn058Dw34ah+Un8RfA8N+GoflJ/jGEuOjFFFKhRRRQFFFFAUUUUBjONV7CVs4LGze8soChV94jKSBz7xJPE+d2igNh+wgrBhUbutdRZbAZ6jkHnf3jD0kL+zKWsWJ/4vdXKqWCqrohU8CFcjr0ubqKBcq9l5mdw5XMyGwAtmRlIJHE90C/LwFoKXYARldajAoAi3VSAgDDKRxPfPe3+t1FAOj2GqUWw4dsjWOwJDALqD1K5rG41I20g1OwQ7ZmqE3YVSMoF3yql/DKtrecUUCxQ7IRc9+8tRSjKwGUqXqOQRx/90jyk2MwjO1Ng+UIS1goJJKMu520Y/SKKBzT7NoWFQuS2YsTkQblCSgt3GJpqSw1Nz0tJ8Dt8tTKGcMyhECPYWUMgtx1PMgX0FoooEf8A6bpkMGYlWIJFlBsGcm7AXLMHZS2+XTrDfsHcLVZFswUALZUqOHqJzIYgC+hAFhbeKKBawuAK1C5fN3QqrkChFFhlSx0BIueJ01sBbpxRQFFFFAUUUUBRRRQFFFFA/9k='
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
