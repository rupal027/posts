
import React from 'react';
import Post from './components/Post';
import Pagination from './components/Pagination';
import Header from './components/Header';
import './App.css';

function App() {
  const users = [
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    },
    {
      name: 'Samsung India',
      username: '@samsungIndia',
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
      likes: 123
    },
    {
      name: 'Max',
      username: '@max07',
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
      likes: 56
    },
    {
      name: 'Bob',
      username: '@0bob012',
      img: "https://thumbs.dreamstime.com/b/orange-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-power-spirit-orange-letter-b-logo-114749629.jpg",
      likes: 789
    },
    {
      name: 'Alice Colbey',
      usename: '@colbey_alice',
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
      likes: 453
    }
  ]
  return (
    <React.Fragment>
      
       <div class="bg"></div>
<      div class="bg bg2"></div>
       <div class="bg bg3"></div>
       <Header/>
      <Pagination
            data={users}
            RenderComponent={Post}
            
            pageLimit={5}
            dataLimit={10}
          />
      
    </React.Fragment>
  );
}

export default App;
