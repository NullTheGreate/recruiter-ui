import ApplicantService from "@/services/ApplicantService";
import { Applicant } from "@/types/applicants";
import { Box, ListItem } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";

export default function Dashboard() {

    // const [applicants, setApplicants] = useState<Applicant[]>([]);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchApplicants = async () => {
    //         try {
    //             const response = await ApplicantService.getApplicants();
    //             setApplicants(response);
    //         } catch (error) {
    //             setError('Failed to fetch data');
    //         }
    //     }
    // })

    return (
        <div>            
            <div className="flex size-full">aaaa
                <Box sx={{ flexGrow: 1 }}>
                    <Grid2 container spacing={2}>
                        {/* <ListItem>{ applicants.map((app) => <ListItem>{app.name}</ListItem>)}</ListItem> */}
                    </Grid2>
                </Box>
            </div>            
        </div>
    );
}

// export async function getServerSideProps() {
//     return {
//         props: {
//             applicants: await ApplicantService.getApplicants(),
//         },
//     };
// }