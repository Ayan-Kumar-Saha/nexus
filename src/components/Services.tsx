import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/constants/services";
import { IService } from "@/interfaces/service";
import SectionHeader from "./SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";

const Services = () => {
    return (
        <section>
            <SectionHeader title={HOME_PAGE_META.services.title}
                description={HOME_PAGE_META.services.description} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    SERVICES.map((service: IService) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </section>
    )
}

export default Services;