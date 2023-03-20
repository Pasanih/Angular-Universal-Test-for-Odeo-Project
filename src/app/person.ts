export interface Person{
    status:string;
    track_id: string;
    title: string;
   	// weight: number;
    artist_name: string;
    thumb:string;
    url:string;
    // it is optional because I know it
    // doesn't exist in the API that we will
    // consume in the next exercise :)
    profession?: string;
}
