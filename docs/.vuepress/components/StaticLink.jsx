import "./less/staticLink.less"
export default {
    props: {
        list: {
            type: Array,
            default: () => [
                [
                    1,
                    2,
                    3,
                    4
                ],
                [
                    1,
                    2,
                    3,
                    4
                ],
                [
                    1,
                    2,
                    3,
                    null
                ]
            ]
        },
        title: {
            type: String,
            default: " concurrent connections"
        },
        tags: {
            type: Array,
            default: () => [
                "Measurement",
                "Fastify(cluster)",
                "Rust - Actix",
                "tttttttttttt",
            ]
        }
    },
    computed: {
        width() {
            return 100 / this.tags.length + "%"
        }
    },
    render() {
        return (
            <div class="statstical-container" >
                <div class="statstical-header" >
                    <div class="statstical-title" >
                        <span >10</span>
                        {this.title}
                    </div>
                    <div class="statstical-column" >
                        {
                            this.tags.map(tag => (
                                <div class="statstical-tag" style={{
                                    width: this.width
                                }}>{tag}</div>
                            ))
                        }
                    </div>
                </div>
                <div class="statsical-body">
                    {
                        this.list.map(item => (
                            <div class="statiscal-record" >
                                {
                                    item.map(value => (
                                        <div class="statiscal-value" style={{
                                            width: this.width
                                        }}>{value}</div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}