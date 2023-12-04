import CardService from "../CardService/CardService";

const SectionServices = () => {
    return (
        <section id="services" data-aos="fade-up">
            <div className="container p-4 p-lg-5">
                <h2 className="section-title">Layanan</h2>
                <p className="lead w-50">Layanan-layanan unggulan kami yang mungkin cocok dengan kebutuhan Anda</p>

                <div className="row my-4">
                    <div className="col-md-6 col-lg-4 p-3">
                        <CardService
                            title="SEO"
                            description="Naikkan peringkat, raih visibilitas maksimal. Dengan layanan SEO kami, hadirkan bisnis Anda ke puncak hasil pencarian. Optimalkan online presence Anda dan tingkatkan trafik organik. Sukses di dunia digital dimulai dengan strategi SEO yang tepat. Bersama, kita tingkatkan posisi dan hadirkan keberhasilan digital bagi bisnis Anda!"
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 p-3">
                        <CardService
                            title="Ads"
                            description="Tingkatkan eksposur, capai hasil maksimal. Manfaatkan kekuatan iklan digital dengan layanan kami. Targetkan audiens tepat, optimalkan konversi. Bisnis Anda layak mendapatkan sorotan, dan kami di sini untuk memastikan itu terjadi. Aktifkan potensi penuh bisnis Anda melalui kampanye iklan yang efektif dan relevan!"
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 p-3">
                        <CardService
                            title="KOL"
                            description="Jalin koneksi dengan influencer pilihan Anda – kunci kesuksesan pemasaran konten. Dengan KOL (Key Opinion Leader) terbaik, hadirkan brand Anda ke pusat perhatian. Dari testimoni otentik hingga kolaborasi kreatif, mari bersama-sama bentuk pengaruh yang tak terlupakan. Optimalisasi potensi pemasaran melalui KOL untuk menarik perhatian dan membangun kepercayaan konsumen."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionServices;
