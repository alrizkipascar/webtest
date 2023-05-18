import HomeBarang from "./component/HomeComp/HomeTable";

// import image from "../Image/background.jpg";
const Dashboard = ({ Welcome }) => {
  // overflow-y-hidden
  return (
    <div className=" w-full h-full lg:h-full grid justify-items-center  flex-row  py-20">
      <div className="h-auto">
        <h1 className="text-3xl text-black text-bold">Penjelasan Singkat</h1>
        <ul class="list-disc">
          <li className="h-auto text-left  font-light leading-relaxed mt-0 mb-4 text-slate-700">
            Web yang dibuat sudah mengikuti petunjuk yang ada di pdf, saya
            menganggap web ini menggunakan backend, back end yang digunakan
            adalah laravel.
          </li>
          <li className="h-auto text-left  font-light leading-relaxed mt-0 mb-4 text-slate-700">
            Jika ingin menilai alur seperti JWT dan api, silahkan kontak saya
            nanti akan saya buatkan repo di github.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
