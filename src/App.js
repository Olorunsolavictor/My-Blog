import { Box, Container } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { bgcolor, color } from '@mui/system';
import GetPosts from './components/GetPosts';
import Posts from './components/Posts';

function App() {
	return (
		<Container>
			<Posts />
			<GetPosts />
		</Container>
	);
}

export default App;
