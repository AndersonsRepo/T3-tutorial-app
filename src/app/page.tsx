import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/dkcjA7SVwrLevXXKR6Qd2l8ocqZfjNEYGOxugpnh7y9FXLDk" ,
  "https://utfs.io/f/dkcjA7SVwrLer57FENbs5MGgd1HkpP8qDEoiZ7Lm3YQwFWhu" ,
  "https://utfs.io/f/dkcjA7SVwrLekJgch8uIg13jcHUuXeS7tZ6q2DTVpnPkYAFL" , 
  "https://utfs.io/f/dkcjA7SVwrLe1SRoRU7YDgtfWIc2HxkosBGETdQb0hNLZnmv" ,
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className=" ">
      <div className="flex flex-wrap gap-4">
        {
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (Gallery in Progress)
    </main>
  );
}
