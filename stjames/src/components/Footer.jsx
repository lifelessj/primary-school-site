import { MapPin, Phone, Mail, Facebook, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* School Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                                SJ
                            </div>
                            <div>
                                <div className="font-bold text-lg">St. James Nkumba</div>
                                <div className="text-sm opacity-90">Primary School</div>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Nurturing young minds with excellence, care, and Christian values.
                            Building tomorrow's leaders today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <nav className="space-y-2">
                            <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                                About Us
                            </Link>
                            <Link to="/academics" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                                Academics
                            </Link>
                            <Link to="/admissions" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                                Admissions
                            </Link>
                            <Link to="/news" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                                News & Events
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 mt-1 opacity-90" />
                                <div className="text-sm opacity-90">
                                    <div>4G63+7W, Lyamutundwe, Entebbe</div>
                                    <div>Wakiso District, Uganda</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 opacity-90" />
                                <span className="text-sm opacity-90">+256 702 997 656</span>
                                <span className="text-sm opacity-90">+256 772 327 842</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 opacity-90" />
                                <span className="text-sm opacity-90">stjamesnkumba@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* School Hours & Social */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">School Hours</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 opacity-90" />
                                <div className="text-sm opacity-90">
                                    <div>Mon - Fri: 7:30 AM - 5:00 PM</div>
                                    <div>Sat: 8:00 AM - 2:00 PM</div>
                                    <div>Sun: Closed</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium mb-3">Follow Us</h4>
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.instagram.com/stjamesnkumbaprimarysch_mpala?igsh=bWJvYWwxamZ3cGEz"
                                    className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@st.james_pri_sch_mpala?_t=ZM-8ya2WRML8pq&_r=1"
                                    className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                                >
                                    <TikTok className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm opacity-90 flex items-center">
                        © {new Date().getFullYear()} St. James Nkumba Primary School. Made with <Heart className="h-3 w-3 mx-1 text-secondary" /> for education.
                    </p>
                    <p className="text-xs opacity-75 mt-2 md:mt-0">
                        Excellence • Care • Faith
                    </p>
                </div>
            </div>
        </footer>
    );
}