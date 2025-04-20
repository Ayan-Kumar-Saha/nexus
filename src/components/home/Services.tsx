import ServiceCard from "@/components/home/ServiceCard";
import { SERVICES } from "@/constants/services";
import { IService } from "@/interfaces/service";
import SectionHeader from "@/components/shared/SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

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

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10">
                <span></span>
                <Link to={{ pathname: '/about-me', hash: 'skills'}} className="inline-flex justify-center items-center text-primary mt-4 md:mt-0 hover:underline">
                    View all Skills <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </section>
    )
}

export default Services;