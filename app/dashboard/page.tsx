import Header from "@/components/layout/header";
import { Box, ListItem } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
export default function Dashboard() {
    return (
        <div>
            <Header></Header>
            <div className="flex size-full min-h-screen">aaaa
                <Box sx={{ flexGrow: 1 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={8}>
                            <ListItem>xs=8</ListItem>
                        </Grid2>
                        <Grid2 xs={4}>
                            <ListItem>xs=4</ListItem>
                        </Grid2>
                        <Grid2 xs={4}>
                            <ListItem>xs=4</ListItem>
                        </Grid2>
                        <Grid2 xs={8}>
                            <ListItem>xs=8</ListItem>
                        </Grid2>
                    </Grid2>
                </Box>
            </div>
        </div>
    );
}