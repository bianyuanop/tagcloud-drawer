import './App.css';
import { Box, Button } from '@material-ui/core';

const file_server = 'http://localhost:4000/upload';

function App() {
  return (
    <Box style={{
      height: '100%',
      width: '100%'
    }}>
      <Box display='flex' flexDirection='row' position='absolute' marginLeft='1%'>
        <Button variant='contained' color='primary'
        onClick={()=>{
          let canvas = document.querySelector('canvas');
          let imageUrl = canvas.toDataURL();

          let form = new FormData();
          form.append('imageUrl', imageUrl);
          fetch(file_server, {
            method: 'POST',
            mode: 'cors',
            body: form
          }).then(resp => {
            if(!resp.ok) throw new Error('response not ok');
            else alert("上传成功")
            console.log(resp.json())
          }).then(data=>{
            console.log(data);
          }).catch(e=>{
            alert("上传失败")
            console.log(e);
          })
        }} 
        >提交</Button>
        <Button variant='contained' color='primary' style={{
          marginLeft: '1%'
        }}
        onClick={()=>{
          let canvas = document.querySelector('canvas');
          let ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, window.innerWidth*0.98, window.innerHeight*0.98);
        }}
        >清除</Button>
      </Box>
      <Box boxShadow={3} margin={1} borderRadius={5}>
        <canvas height={window.innerHeight*0.98} width={window.innerWidth*0.98} />
      </Box>
    </Box>
  );
}


export default App;