import ServiceCard from "@/components/home/ServiceCard";
import { SERVICES } from "@/constants/services";
import { IService } from "@/interfaces/service";
import SectionHeader from "@/components/shared/SectionHeader";
import { HOME_PAGE_META } from "@/constants/page-meta";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}>
            <SectionHeader title={HOME_PAGE_META.services.title}
                description={HOME_PAGE_META.services.description} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    SERVICES.map((service: IService, index: number) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))
                }
            </div>

            <div className="flex justify-end mt-8">
                <Link to={{ pathname: '/about-me', hash: 'skills' }} className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline underline-offset-4">
                    view all skills <ArrowRight size={14} />
                </Link>
            </div>
        </motion.section>
    )
}

export default Services;
