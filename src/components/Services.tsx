import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/constants/services";
import { IService } from "@/interfaces/service";

const Services = () => {
    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">What I Do</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    SERVICES.map((service: IService) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </section>
    )
}

export default Services;