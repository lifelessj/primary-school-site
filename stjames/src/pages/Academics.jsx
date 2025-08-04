import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Trophy, Download, Calendar } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Academics() {
    const subjects = [
        "English Language", "Mathematics", "Science", "Social Studies",
        "Religious Education", "Physical Education", "Art & Craft", "Music"
    ];

    const classes = [
        { level: "P.1", age: "6-7 years", students: "40-45", focus: "Foundation skills, basic literacy and numeracy" },
        { level: "P.2", age: "7-8 years", students: "40-45", focus: "Building reading and writing skills" },
        { level: "P.3", age: "8-9 years", students: "40-45", focus: "Intermediate skills development" },
        { level: "P.4", age: "9-10 years", students: "35-40", focus: "Advanced reading and problem solving" },
        { level: "P.5", age: "10-11 years", students: "35-40", focus: "Preparation for upper primary" },
        { level: "P.6", age: "11-12 years", students: "30-35", focus: "Pre-examination preparation" },
        { level: "P.7", age: "12-13 years", students: "30-35", focus: "PLE examination preparation" }
    ];

    const schedule = [
        { time: "7:00 - 7:30 AM", activity: "Assembly & Devotion" },
        { time: "7:30 - 8:30 AM", activity: "First Lesson" },
        { time: "8:30 - 9:30 AM", activity: "Second Lesson" },
        { time: "9:30 - 10:00 AM", activity: "Break Time" },
        { time: "10:00 - 11:00 AM", activity: "Third Lesson" },
        { time: "11:00 - 12:00 PM", activity: "Fourth Lesson" },
        { time: "12:00 - 1:00 PM", activity: "Lunch Break" },
        { time: "1:00 - 2:00 PM", activity: "Fifth Lesson" },
        { time: "2:00 - 3:00 PM", activity: "Sixth Lesson" },
        { time: "3:00 - 4:00 PM", activity: "Co-curricular Activities" },
        { time: "4:00 - 5:00 PM", activity: "Prep Time / Departure" }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Hero Section */}
            <section className="bg-gradient-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academics</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Comprehensive curriculum designed to build strong foundations and prepare students for success
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Curriculum Overview */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <Badge className="bg-secondary text-secondary-foreground mb-4">Curriculum</Badge>
                        <h2 className="text-3xl font-bold text-primary mb-4">What We Teach</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our curriculum follows the Uganda National Curriculum with enhanced Christian education and life skills.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {subjects.map((subject, index) => (
                            <Card key={index} className="shadow-soft border-0 hover:shadow-card transition-all duration-300">
                                <CardContent className="p-4 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-sm">{subject}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-accent-light p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-3">Special Programs</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <Trophy className="h-4 w-4 text-accent" />
                                <span>Debate & Public Speaking</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Trophy className="h-4 w-4 text-accent" />
                                <span>Science Club</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Trophy className="h-4 w-4 text-accent" />
                                <span>Computer Literacy</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Class Structure */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <Badge className="bg-primary text-primary-foreground mb-4">Classes</Badge>
                        <h2 className="text-3xl font-bold text-primary mb-4">Class Structure (P.1 - P.7)</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Age-appropriate learning with small class sizes for personalized attention.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {classes.map((classInfo, index) => (
                            <Card key={index} className="shadow-soft border-0 hover:shadow-card transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-4 gap-4 items-center">
                                        <div className="text-center md:text-left">
                                            <div className="text-2xl font-bold text-primary">{classInfo.level}</div>
                                            <div className="text-sm text-muted-foreground">{classInfo.age}</div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                                <Users className="h-4 w-4 text-accent" />
                                                <span className="font-medium">{classInfo.students} students</span>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <p className="text-sm text-gray-700">{classInfo.focus}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* School Schedule */}
                <section>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <div className="mb-8">
                                <Badge className="bg-accent text-accent-foreground mb-4">Schedule</Badge>
                                <h2 className="text-3xl font-bold text-primary mb-4">Daily Schedule</h2>
                                <p className="text-lg text-muted-foreground">
                                    Structured day promoting learning, spiritual growth, and character development.
                                </p>
                            </div>

                            <Card className="shadow-card border-0">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <span>Monday - Friday</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {schedule.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                            <span className="font-medium text-sm">{item.time}</span>
                                            <span className="text-sm text-muted-foreground">{item.activity}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            {/* Assessment */}
                            <Card className="shadow-card border-0">
                                <CardHeader>
                                    <CardTitle className="text-xl text-primary">Assessment & Evaluation</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <div className="font-medium">Continuous Assessment</div>
                                                <div className="text-sm text-muted-foreground">Regular tests and assignments</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                                            <div>
                                                <div className="font-medium">Termly Examinations</div>
                                                <div className="text-sm text-muted-foreground">Comprehensive end-of-term exams</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                                            <div>
                                                <div className="font-medium">Progress Reports</div>
                                                <div className="text-sm text-muted-foreground">Detailed feedback to parents</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Academic Calendar */}
                            <Card className="shadow-card border-0">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <span>Academic Year</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="font-medium">Term 1: January - April</div>
                                            <div className="text-sm text-muted-foreground">New academic year begins</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Term 2: May - August</div>
                                            <div className="text-sm text-muted-foreground">Mid-year assessments</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Term 3: September - December</div>
                                            <div className="text-sm text-muted-foreground">Final exams and graduation</div>
                                        </div>
                                    </div>

                                    <Button className="w-full mt-4" variant="outline">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Academic Calendar
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}